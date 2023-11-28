export function useGetAssetWidth(filename: string) {
  return filename.split('/')[5].split('x')[0];
}

export function useGetAssetHeight(filename: string) {
  return filename.split('/')[5].split('x')[1];
}
