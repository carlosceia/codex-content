import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabName',
  standalone: false
})
export class TabNamePipe implements PipeTransform {
  private readonly MAX_LENGTH = 20;

  transform(fileName: string): string {
    const extension = fileName.split('.').pop();
    const fileNameWithoutExtension = fileName.replace(`.${extension}`, '');

    if (fileNameWithoutExtension.length > this.MAX_LENGTH) {
      return `${fileNameWithoutExtension.substring(
        0,
        this.MAX_LENGTH / 2
      )}[…]${fileNameWithoutExtension.substring(
        fileNameWithoutExtension.length - this.MAX_LENGTH / 2,
        fileNameWithoutExtension.length
      )}`;
    }

    return fileNameWithoutExtension;
  }
}
