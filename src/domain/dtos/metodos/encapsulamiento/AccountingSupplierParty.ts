//referente a nuestra cuenta y va el rut y el nit codificacion interna

export function AccountingSupplierParty(payload:any):string{

    return`<cac:AccountingSupplierParty>
   <!-- identificador de la organizacion juridica de la persona -->
      <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>
      <cac:Party>
         <cac:PartyName>
         <!-- nombre comercial del emisor  tal cual esta en el rut-->
            <cbc:Name>Nombre Tienda</cbc:Name>
         </cac:PartyName>
         <cac:PartyName>
            <cbc:Name>Establecimiento Principal</cbc:Name>
         </cac:PartyName>
         <cac:PartyName>
            <cbc:Name>DIAN</cbc:Name>
         </cac:PartyName>
         <cac:PhysicalLocation>
            <cac:Address>
            <!-- codigo del municipio donde se genera la factura usar el excel para codificar -->
               <cbc:ID>11001</cbc:ID>
               <cbc:CityName>Bogotá, D.c. </cbc:CityName>
               <cbc:CountrySubentity>Bogotá</cbc:CountrySubentity>
               <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>
               <cac:AddressLine>
                  <cbc:Line>Av. #97 - 13</cbc:Line>
               </cac:AddressLine>
               <cac:Country>
                  <cbc:IdentificationCode>CO</cbc:IdentificationCode>
                  <cbc:Name languageID="es">Colombia</cbc:Name>
               </cac:Country>
            </cac:Address>
         </cac:PhysicalLocation>
         <cac:PartyTaxScheme>
            <cbc:RegistrationName>DIAN</cbc:RegistrationName>
            <cbc:CompanyID schemeAgencyID="195"
               schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)"
               schemeID="4" schemeName="31">
               <!-- nit del emisor -->
               800197268</cbc:CompanyID>
            <cbc:TaxLevelCode listName="05">
             <!-- Obligaciones o responsabilidades del
            contribuyente; incluye el régimen al que
            pertenece el emisor -->
            O-99
            </cbc:TaxLevelCode>
            <cac:RegistrationAddress>
            <!-- direccion fisica -->
               <cbc:ID>11001</cbc:ID>
               <cbc:CityName>Bogotá, D.c. </cbc:CityName>
               <cbc:CountrySubentity>Bogotá</cbc:CountrySubentity>
               <cbc:CountrySubentityCode>11</cbc:CountrySubentityCode>
               <cac:AddressLine>
                  <cbc:Line>Av. Jiménez #7 - 13</cbc:Line>
               </cac:AddressLine>
               <cac:Country>
                  <cbc:IdentificationCode>CO</cbc:IdentificationCode>
                  <cbc:Name languageID="es">Colombia</cbc:Name>
               </cac:Country>
            </cac:RegistrationAddress>
            <cac:TaxScheme>
            <!-- dentificador del tributo -->
               <cbc:ID>01</cbc:ID>
               <!-- nombre del impuesto -->
               <cbc:Name>IVA</cbc:Name>
            </cac:TaxScheme>
         </cac:PartyTaxScheme>
         <cac:PartyLegalEntity>
         <!-- Grupo de información legales del emisor -->
         <!-- Nombre registrado en el RUT. Si el emisor persona jurídica
          desea también utilizar el nombre comercial en el archivo
          /Invoice/cac:AccountingSupplierParty/cac
          de la factura, debe utilizar el elemento -->
            <cbc:RegistrationName>DIAN</cbc:RegistrationName>
            <cbc:CompanyID schemeAgencyID="195"
               schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)"
               schemeID="9" schemeName="31">
               <!-- nit emisor -->
               800197268</cbc:CompanyID>
            <cac:CorporateRegistrationScheme>
             <!-- aqui ira el prefijo de la facturacion aqui se cambia -->
               <cbc:ID>SETP</cbc:ID>
               <!-- Número de matrícula mercantil -->
               <cbc:Name>10181</cbc:Name>
            </cac:CorporateRegistrationScheme>
         </cac:PartyLegalEntity>
         <cac:Contact>
         <!-- Grupo de detalles con información de
            contacto del emsior -->
            <cbc:Name>Eric Valencia</cbc:Name>
            <cbc:Telephone>6111111</cbc:Telephone>
            <cbc:ElectronicMail>eric.valencia@ket.co</cbc:ElectronicMail>
            <cbc:Note>Test descripcion contacto</cbc:Note>
         </cac:Contact>
      </cac:Party>
   </cac:AccountingSupplierParty>
    `.trim();
}