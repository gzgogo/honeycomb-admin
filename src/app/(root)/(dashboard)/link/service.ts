import type { BaseResponse } from '@/types/BaseResponse';
import request from '@/utils/request';
import type { LinkCreateResponse } from './types/link.create.response';
import type { LinkEntity } from './types/link.entity';
import type { LinkIndexRequest } from './types/link.index.request';
import type { LinkIndexResponse } from './types/link.index.response';

export const index = (params?: LinkIndexRequest): Promise<LinkIndexResponse> => {
  console.log('links=>service=>index', params);
  return request({
    url: '/link',
    method: 'get',
    params,
  });
};

export const create = (params: Omit<LinkEntity, 'id'>): Promise<LinkCreateResponse> => {
  console.log('links=>service=>create', params);
  return request({
    url: '/link',
    method: 'post',
    data: params,
  });
};

export const destroy = (ids: string[]): Promise<BaseResponse<null>> => {
  console.log('links=>service=>destroy', ids);
  return request({
    url: `/link`,
    params: { ids },
    method: 'delete',
  });
};

export const update = (
  id: string,
  params: Partial<Omit<LinkEntity, 'id'>>,
): Promise<LinkCreateResponse> => {
  console.log('links=>service=>update', id, params);
  return request({
    url: `/link/${id}`,
    method: 'patch',
    data: params,
  });
};
