export class MessageDto<C> {
  context: C;
  to: string;
  template: string;
  title?: string;
}
