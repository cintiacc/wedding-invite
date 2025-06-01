export function showAlert(type: 'success' | 'error' | 'info', title: string, text?: string) {
  // @ts-ignore - "Swal" é global da CDN
  Swal.fire({
    icon: type,
    title: title,
    text: text || '',
    confirmButtonText: 'Ok'
  });
}
