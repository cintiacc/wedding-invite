export function showAlert(type: 'success' | 'error' | 'info', title: string, text?: string) {
  // @ts-ignore - "Swal" é global da CDN
  return Swal.fire({
    icon: type,
    title: title,
    text: text || '',
    confirmButtonText: 'Ok'
  });
}

export function showConfirm(title: string, text?: string) {
  // @ts-ignore - "Swal" é global da CDN
  return Swal.fire({
    title,
    text: text || '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Cancelar',
  });
}