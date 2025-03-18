//referente a el envio y transporte de productos no creo que lo usemos
export function CacDelivery(payload:any):string{
    return`
    <cac:Delivery>
   <!-- referente a la entrega de vienes mercancia y esas cosas se coloco el nombre de la empresa que entrega -->
      <cac:DeliveryAddress>
         <cbc:ID>11001</cbc:ID>
         <cbc:CityName>Bogotá, D.c. </cbc:CityName>
         <cbc:CountrySubentity>Bogotá, D.c. 11</cbc:CountrySubentity>
         <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>
         <cac:AddressLine>
            <cbc:Line>CARRERA 8 No 20-14/40</cbc:Line>
         </cac:AddressLine>
         <cac:Country>
            <cbc:IdentificationCode>CO</cbc:IdentificationCode>
            <cbc:Name languageID="es">Colombia</cbc:Name>
         </cac:Country>
      </cac:DeliveryAddress>
      <cac:DeliveryParty>
         <cac:PartyName>
            <cbc:Name>Empresa de transporte</cbc:Name>
         </cac:PartyName>
         <cac:PhysicalLocation>
            <cac:Address>
               <cbc:ID>11001</cbc:ID>
               <cbc:CityName>Bogotá, D.c. </cbc:CityName>
               <cbc:CountrySubentity>Bogotá</cbc:CountrySubentity>
               <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>
               <cac:AddressLine>
                  <cbc:Line>Av. #17 - 193</cbc:Line>
               </cac:AddressLine>
               <cac:Country>
                  <cbc:IdentificationCode>CO</cbc:IdentificationCode>
                  <cbc:Name languageID="es">Colombia</cbc:Name>
               </cac:Country>
            </cac:Address>
         </cac:PhysicalLocation>
         <cac:PartyTaxScheme>
            <cbc:RegistrationName>Empresa de transporte</cbc:RegistrationName>
            <cbc:CompanyID schemeAgencyID="195"
               schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)"
               schemeID="1" schemeName="31">981223983</cbc:CompanyID>
            <cbc:TaxLevelCode listName="04">O-99</cbc:TaxLevelCode>
            <cac:TaxScheme>
               <cbc:ID>01</cbc:ID>
               <cbc:Name>IVA</cbc:Name>
            </cac:TaxScheme>
         </cac:PartyTaxScheme>
         <cac:PartyLegalEntity>
            <cbc:RegistrationName>Empresa de transporte</cbc:RegistrationName>
            <cbc:CompanyID schemeAgencyID="195"
               schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)"
               schemeID="1" schemeName="31">981223983</cbc:CompanyID>
            <cac:CorporateRegistrationScheme>
               <cbc:Name>75433</cbc:Name>
            </cac:CorporateRegistrationScheme>
         </cac:PartyLegalEntity>
         <cac:Contact>
         <!-- nombre de la persona que recibio la mercancia  el transportador-->
            <cbc:Name>Eric Van Boxsom</cbc:Name>
            <cbc:Telephone>9712311</cbc:Telephone>
            <cbc:Telefax>12431241</cbc:Telefax>
            <cbc:ElectronicMail>eric.vanboxsom@gosocket.net</cbc:ElectronicMail>
            <cbc:Note>Test descripcion contacto</cbc:Note>
         </cac:Contact>
      </cac:DeliveryParty>
   </cac:Delivery>
    <cac:DeliveryTerms>
   <!-- Grupo para información relacionadas con la entrega -->
   <!-- Método de pago de costes de transporte:
     Se utilizar para indicar cómo se pagan los
     costes del transporte (por ejemplo, Portes
     Debidos, Portes Pagados) Puede ser un
     texto libre que entiendan el comprador y E
     vendedor -->
      <cbc:SpecialTerms>Portes Pagados</cbc:SpecialTerms>
      <!-- Código correspondiente al medio de pago -->
      <cbc:LossRiskResponsibilityCode>CFR</cbc:LossRiskResponsibilityCode>
      <!-- no usado por la DIAN se puede omitir o colocar algo referente a la factura pero sobre el transporte -->
      <cbc:LossRisk>Costo y Flete</cbc:LossRisk>
   </cac:DeliveryTerms>
    `
}