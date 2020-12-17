export * from './aBApi';
import { ABApi } from './aBApi';
export * from './contentApi';
import { ContentApi } from './contentApi';
export * from './customApi';
import { CustomApi } from './customApi';
export * from './dataApi';
import { DataApi } from './dataApi';
export * from './dataExportApi';
import { DataExportApi } from './dataExportApi';
export * from './dataImportApi';
import { DataImportApi } from './dataImportApi';
export * from './dictionaryApi';
import { DictionaryApi } from './dictionaryApi';
export * from './journeyApi';
import { JourneyApi } from './journeyApi';
export * from './listApi';
import { ListApi } from './listApi';
export * from './mediumApi';
import { MediumApi } from './mediumApi';
export * from './notificationGroupApi';
import { NotificationGroupApi } from './notificationGroupApi';
export * from './organizationApi';
import { OrganizationApi } from './organizationApi';
export * from './recurringApi';
import { RecurringApi } from './recurringApi';
export * from './singleBatchApi';
import { SingleBatchApi } from './singleBatchApi';
export * from './statusApi';
import { StatusApi } from './statusApi';
export * from './storedProcedureApi';
import { StoredProcedureApi } from './storedProcedureApi';
export * from './tagListApi';
import { TagListApi } from './tagListApi';
export * from './taskApi';
import { TaskApi } from './taskApi';
export * from './transactionalApi';
import { TransactionalApi } from './transactionalApi';
export * from './transactionalBulkApi';
import { TransactionalBulkApi } from './transactionalBulkApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.ClientResponse, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [ABApi, ContentApi, CustomApi, DataApi, DataExportApi, DataImportApi, DictionaryApi, JourneyApi, ListApi, MediumApi, NotificationGroupApi, OrganizationApi, RecurringApi, SingleBatchApi, StatusApi, StoredProcedureApi, TagListApi, TaskApi, TransactionalApi, TransactionalBulkApi];
