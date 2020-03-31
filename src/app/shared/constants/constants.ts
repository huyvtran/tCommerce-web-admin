import { environment } from '../../../environments/environment';

export const urlFriendlyCodeRegex = new RegExp('^[a-zA-Z0-9\-_]+$');
export const inputMediaAcceptTypes = '.jpg,.jpeg,.png,.webp,.svg,.tiff,.gif';

export const API_HOST = environment.production ? '' : 'http://localhost:3000';
