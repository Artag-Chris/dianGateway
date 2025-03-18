//referente a la dian creo que no se cambia nada
export function TaxRepresentativeParty(payload:any):string{
    return`<cac:TaxRepresentativeParty>
      <cac:PartyIdentification>
         <cbc:ID schemeAgencyID="195"
            schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)" schemeID="4"
            schemeName="31">989123123</cbc:ID>
      </cac:PartyIdentification>
   </cac:TaxRepresentativeParty>
    `
}