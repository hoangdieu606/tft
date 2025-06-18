// lib/data.ts
import { cache } from 'react';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Champion, Trait, Augment, Item, Guide, GenericDataResponse, GuidesDataResponse } from './types';


type DataType =
  | 'champions'
  | 'traits'
  | 'items'
  | 'augments'
  | 'champions-revival'
  | 'traits-revival'
  | 'items-revival'
  | 'augments-revival'
  | 'guides'
  | 'guides-revival';

type DataTypeMap = {
  champions: Champion;
  'champions-revival': Champion;
  traits: Trait;
  'traits-revival': Trait;
  items: Item;
  'items-revival': Item;
  augments: Augment;
  'augments-revival': Augment;
  guides: Guide;
  'guides-revival': Guide;
};

type FetchDataReturn<T extends DataType> = T extends 'guides' | 'guides-revival'
  ? GuidesDataResponse<DataTypeMap[T]> | null
  : GenericDataResponse<DataTypeMap[T]> | null;

function isGuidesDataResponse<T extends DataType>(
  data: unknown,
  type: T
): data is GuidesDataResponse<DataTypeMap[T]> {
  return (
    (type === 'guides' || type === 'guides-revival') &&
    !!data &&
    typeof data === 'object' &&
    'guides' in data &&
    Array.isArray((data as Record<string, unknown>).guides) &&
    'status' in data &&
    typeof (data as Record<string, unknown>).status === 'string' &&
    'totalGuides' in data &&
    typeof (data as Record<string, unknown>).totalGuides === 'number' &&
    'updated' in data &&
    typeof (data as Record<string, unknown>).updated === 'string'
  );
}

function isGenericDataResponse<T extends DataType>(
  data: unknown,
  type: T
): data is GenericDataResponse<DataTypeMap[T]> {
  return (
    !['guides', 'guides-revival'].includes(type) &&
    !!data &&
    typeof data === 'object' &&
    'set' in data &&
    (typeof (data as Record<string, unknown>).set === 'string' ||
      typeof (data as Record<string, unknown>).set === 'number') &&
    'version' in data &&
    typeof (data as Record<string, unknown>).version === 'string' &&
    'data' in data &&
    Array.isArray((data as Record<string, unknown>).data)
  );
}

export const DataFetcher = cache(async <T extends DataType>(
  type: T
): Promise<FetchDataReturn<T>> => {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'auto', `${type}.json`);
    const fileContent = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    if (isGuidesDataResponse(data, type) || isGenericDataResponse(data, type)) {
      return data as FetchDataReturn<T>;
    }

    console.error(`Cấu trúc dữ liệu ${type} không hợp lệ`);
    return null as FetchDataReturn<T>;
  } catch (error) {
    console.error(`Lỗi khi đọc file ${type}:`, error);
    return null as FetchDataReturn<T>;
  }
});