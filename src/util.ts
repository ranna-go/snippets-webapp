import { showSnackbar } from './snackbarService';

export function copyToClipboard(v: string): boolean {
  const inpt = document.createElement('input');
  inpt.style.position = 'absolute';
  inpt.style.height = '0';
  inpt.style.opacity = '0';
  document.body.appendChild(inpt);
  inpt.value = v;
  inpt.select();
  inpt.setSelectionRange(0, v.length);
  const success = document.execCommand('copy');
  document.body.removeChild(inpt);

  if (success) showSnackbar('Copied to clipboard.', 'success');
  else showSnackbar('Copying to clipboard failed. :(', 'error');

  return success;
}
