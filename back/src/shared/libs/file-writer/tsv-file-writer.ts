import { FileWriter } from './file-wtiter.interface.js';
import { WriteStream, createWriteStream } from 'node:fs';

export class TSVFileWriter implements FileWriter {
  private stream: WriteStream;

  constructor(filename: string) {
    this.stream = createWriteStream(filename, {
      flags: 'w',
      encoding: 'utf-8',
      autoClose: true,
    });
  }

  public async write(row: string): Promise<unknown> {
    const isWriteSuccess = this.stream.write(`${row}\n`);
    if(!isWriteSuccess) {
      return new Promise((resolve) => {
        this.stream.once('drain', () => resolve(true));
      });
    }

    return Promise.resolve();
  }
}
