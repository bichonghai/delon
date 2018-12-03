export class XlsxConfig {
  /**
   * Xlsx library path
   */
  url ?= '//cdn.bootcss.com/xlsx/0.12.13/xlsx.full.min.js';
  /**
   * Defines which Xlsx optional modules should get loaded, e.g:
   *
   * `[ '//cdn.bootcss.com/xlsx/0.12.13/cpexcel.js' ]`
   */
  modules?: string[] = [];
}
