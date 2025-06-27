import { Injectable } from '@angular/core';
import { ApiDoc } from './api-doc.model';

@Injectable({ providedIn: 'root' })
export class CodexApiDocService {
  async getData(name: string) {
    const data = await import(
      /* webpackChunkName: "compodoc/[index].[request]" */ `../../../documentation/${name}.json`
    );
    const json = data.default;
    return json;
  }

  async loadAllData(apiDocs: ApiDoc[]): Promise<Partial<ApiDoc>[]> {
    let dataToRender = [];
    for (const apiDoc of apiDocs) {
      const doc = await this.getData(apiDoc.name);
      doc.import = apiDoc.import;
      dataToRender = [...dataToRender, doc];
      if (doc.type) {
        continue;
      }

      const filteredExports = doc.children?.find(child => child.type === 'exports');
      const filteredProviders = doc.children?.find(child => child.type === 'providers');
      const childrenToInclude = [];
      if (Array.isArray(filteredExports?.elements)) {
        childrenToInclude.push(...filteredExports?.elements);
      }
      if (Array.isArray(filteredProviders?.elements)) {
        childrenToInclude.push(...filteredProviders?.elements);
      }
      dataToRender.push(
        ...(await Promise.all(childrenToInclude.map(child => this.getData(child?.name))))
      );
    }

    return dataToRender;
  }
}
