/// <reference types="@types/fhir" />

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientIdentifier'
})
export class PatientIdentifierPipe implements PipeTransform {

  transform(patient: fhir.Patient, assigningAuthority: string, typeCode: string): string {
    if (!patient || !patient.identifier) { return ''; }

    const ids = patient.identifier
      .filter(i =>
        // Filter to identifiers where we have a value
        i.assigner && i.assigner.display &&
        i.type && i.type.coding &&
        i.value)
      .map(i => {
        return {
          assigningAuthority: i.assigner.display,
          matchingTypeCodes: i.type.coding.filter(c => c.code === typeCode),
          identifierValue: i.value
        };
      }).filter(i =>
        // Filter to identifiers which have a matching type code
        // and assigning authority
        i.assigningAuthority === assigningAuthority &&
        i.matchingTypeCodes.length > 0
      );

    // ASSUMPTION: There will only be one matching identifier
    return ids.length > 0 ? ids[0].identifierValue : '';
  }

}
