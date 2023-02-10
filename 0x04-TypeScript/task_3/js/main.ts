/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from './crud'

interface RowInterface {
    firstName: string;
    lastName: string;
}

const row: RowInterface = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}
const newRodID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {age: 23, ...row};

CRUD.updateRow(newRodID, updatedRow);
CRUD.deleteRow(newRodID)