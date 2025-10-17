import { PocketBaseApi } from './credentials/PocketBaseApi.credentials';
import { PocketBase } from './nodes/PocketBase/PocketBase.node';
import { PocketBaseSend } from './nodes/PocketBaseSend/PocketBaseSend.node';

export const nodes = [PocketBase, PocketBaseSend];
export const credentials = [PocketBaseApi];
