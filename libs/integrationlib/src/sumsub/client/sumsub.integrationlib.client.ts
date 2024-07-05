import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';
import {
  SumsubIssueTokenDto,
  SumsubIssuedTokenDto,
} from '../dtos/sumsub.issue.token.dto';
import { SumsubEnum } from '../enums/sumsub.enum';
import { RequestMetadataDto } from '../dtos/sumsub.requestmetadata.dto';

@Injectable()
export class SumsubIntegrationlibClient {
  private createAxiosInstance() {
    const baseURL = process.env.SUMSUB_ROOT_URL;
    const appToken = process.env.SUMSUB_APP_TOKEN;
    const axiosInstance = axios.create({
      baseURL,
    });
    axiosInstance.defaults.headers.common[SumsubEnum.SUMSUB_HEADER_APP_TOKEN] =
      appToken;
    axiosInstance.defaults.headers.common['Accept'] = '*/*';
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
    return axiosInstance;
  }

  private createSignature(requestMetadata: RequestMetadataDto) {
    const secretKey = process.env.SUMSUB_SECRET_KEY;
    const valueToSign =
      requestMetadata.ts +
      requestMetadata.method.toUpperCase() +
      requestMetadata.url.toString() +
      requestMetadata.data;
    const signature = crypto.createHmac('sha256', secretKey);
    signature.update(valueToSign);
    return signature.digest('hex');
  }

  async generateToken(
    issueTokenDto: SumsubIssueTokenDto,
  ): Promise<SumsubIssuedTokenDto> {
    try {
      const issueTokenPath = `/resources/accessTokens?userId=${issueTokenDto.userId}&ttlInSecs=${issueTokenDto.ttlInSecs}&levelName=${issueTokenDto.levelName}`;
      const metadata: RequestMetadataDto = {
        method: 'POST',
        url: issueTokenPath,
        ts: Math.floor(Date.now() / 1000).toString(),
        data: null,
      };
      const axiosInstance = this.createAxiosInstance();
      const signature = this.createSignature(metadata);
      axiosInstance.defaults.headers.common[
        SumsubEnum.SUMSUB_HEADER_TIMESTAMP
      ] = metadata.ts;
      axiosInstance.defaults.headers.common[
        SumsubEnum.SUMSUB_HEADER_SIGNATURE
      ] = signature;
      Logger.log('IssueSumsubToken', 'ISSUING SUMSUB TOKEN');
      var token: SumsubIssuedTokenDto = null;
      await axiosInstance
        .post(metadata.url, null)
        .then((response) => {
          token = response.data;
        })
        .catch((error) => Logger.error('IssueSumsubToken', error));
      return token;
    } catch (error) {
      Logger.error('IssueSumsubToken', error);
      throw error;
    }
  }
}
