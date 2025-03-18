//referente al cliente o al facturado o due;o de la factura

export function AccountingCustomerParty(payload:any):string{

    return`
    <cac:AccountingCustomerParty>
   <!-- Identificador de tipo de persona  lo mismo que deceval aunque mirar documentacion por si cambian los campos parametricos-->
      <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>
      <cac:Party>
      <!-- Grupo con información generales sobre el adquiriente o del que recibe la factura -->
      <!-- hay un campo de id que no aparece aqui pero es referente al documento por ejemplo si es uno tipo C.C seria 1088261233 -->
         <cac:PartyName>
            <cbc:Name>OPTICAS GMO COLOMBIA S A S</cbc:Name>
         </cac:PartyName>
         <cac:PhysicalLocation>
         <!-- informacion fisica del que adquiere -->
            <cac:Address>
               <cbc:ID>11001</cbc:ID>
               <cbc:CityName>Bogotá, D.c. </cbc:CityName>
               <cbc:CountrySubentity>Bogotá</cbc:CountrySubentity>
               <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>
               <cac:AddressLine>
               <!-- es de campo libre no hay normas para escribir la direccion del adquiriente -->
                  <cbc:Line>CARRERA 8 No 20-14/40</cbc:Line>
               </cac:AddressLine>
               <cac:Country>
                  <cbc:IdentificationCode>CO</cbc:IdentificationCode>
                  <cbc:Name languageID="es">Colombia</cbc:Name>
               </cac:Country>
            </cac:Address>
         </cac:PhysicalLocation>
         <cac:PartyTaxScheme>
         <!-- referente al que adquiere o a quien se le da la factura -->
            <cbc:RegistrationName>OPTICAS GMO COLOMBIA S A S</cbc:RegistrationName>
            <cbc:CompanyID schemeAgencyID="195"
               schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)"
               schemeID="3" schemeName="31">900108281</cbc:CompanyID>
            <cbc:TaxLevelCode listName="04">O-99</cbc:TaxLevelCode>
            <cac:RegistrationAddress>
               <cbc:ID>11001</cbc:ID>
               <cbc:CityName>Bogotá, D.c. </cbc:CityName>
               <cbc:CountrySubentity>Bogotá</cbc:CountrySubentity>
               <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>
               <cac:AddressLine>
                  <cbc:Line>CR 9 A N0 99 - 07 OF 802</cbc:Line>
               </cac:AddressLine>
               <cac:Country>
                  <cbc:IdentificationCode>CO</cbc:IdentificationCode>
                  <cbc:Name languageID="es">Colombia</cbc:Name>
               </cac:Country>
            </cac:RegistrationAddress>
            <cac:TaxScheme>
            <!-- se queda quieto si el impuesto es iva claro -->
               <cbc:ID>01</cbc:ID>
               <cbc:Name>IVA</cbc:Name>
            </cac:TaxScheme>
         </cac:PartyTaxScheme>
         <cac:PartyLegalEntity>
            <cbc:RegistrationName>OPTICAS GMO COLOMBIA S A S</cbc:RegistrationName>
            <cbc:CompanyID schemeAgencyID="195"
               schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)"
               schemeID="3" schemeName="31">900108281</cbc:CompanyID>
            <cac:CorporateRegistrationScheme>
               <cbc:Name>90518</cbc:Name>
            </cac:CorporateRegistrationScheme>
         </cac:PartyLegalEntity>
         <cac:Contact>
         <!-- persona a la que se le dio la factura -->
            <cbc:Name>Diana Cruz</cbc:Name>
            <cbc:Telephone>31031031089</cbc:Telephone>
            <cbc:ElectronicMail>dcruz@empresa.org</cbc:ElectronicMail>
         </cac:Contact>
      </cac:Party>
   </cac:AccountingCustomerParty>
    `
}