//aqui va lo refgerente a autorizacion de factura 
//necesito estudiar mas esta parte

export function UBLExtensionDianExtentions(payload:any):any {
console.log(payload);
    return`
<ext:UBLExtension>
         <ext:ExtensionContent>
            <sts:DianExtensions>
               <sts:InvoiceControl>
                  <!-- numero de autorizacion o codigo de la resolucion otorgada para la numeracion -->
                  <sts:InvoiceAuthorization>18760000001</sts:InvoiceAuthorization>
                  <sts:AuthorizationPeriod>
                     <cbc:StartDate>2019-01-19</cbc:StartDate>
                     <cbc:EndDate>2030-01-19</cbc:EndDate>
                  </sts:AuthorizationPeriod>
                  <sts:AuthorizedInvoices>
                     <!-- grupo de informacion del rango de numeracion autorizado para nosotros -->
                     <sts:Prefix>FINO</sts:Prefix>
                     <sts:From>990000000</sts:From>
                     <sts:To>995000000</sts:To>
                  </sts:AuthorizedInvoices>
               </sts:InvoiceControl>
               <sts:InvoiceSource>
                  <!-- por defecto siempre igual -->
                  <cbc:IdentificationCode listAgencyID="6"
                     listAgencyName="United Nations Economic Commission for Europe"
                     listSchemeURI="urn:oasis:names:specification:ubl:codelist:gc:CountryIdentificationCode-2.1">
                     CO</cbc:IdentificationCode>
               </sts:InvoiceSource>
               <sts:SoftwareProvider>
                  <!-- Identificador del Proveedor Tecnológico
                  utilizado en la emisión de la factura. Un
                  Obligado a facturar puede ser también
                  Proveedor Tecnológico para sí mismo u
                  otros, en cuyo caso será Proveedor
                  Tecnológico -->
                  <sts:ProviderID schemeAgencyID="195"
                     schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)"
                     schemeID="4" schemeName="31">800197268</sts:ProviderID>
                  <!-- este es un identificador unico que nos da la dian cuando colocamos el nombre
                  de el programa que vamos a usar -->
                  <sts:SoftwareID schemeAgencyID="195"
                     schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">
                     56f2ae4e-9812-4fad-9255-08fcfcd5ccb0</sts:SoftwareID>
               </sts:SoftwareProvider>
               <sts:SoftwareSecurityCode schemeAgencyID="195"
                  schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)">
                  a8d18e4e5aa00b44a0b1f9ef413ad8215116bd3ce91730d580eaed795c83b5a32fe6f0823abc71400b3d59eb542b7de8
               </sts:SoftwareSecurityCode>
               <sts:AuthorizationProvider>
                  <!-- Huella del software que autorizó la DIAN al
               SoftwareSecurit
               Obligado a Facturar Electrónicamente o al E
               y Code Proveedor Tecnológico -->
                  <sts:AuthorizationProviderID schemeAgencyID="195"
                     schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)"
                     schemeID="4" schemeName="31">
                     <!-- nit de nostros --> 800197268</sts:AuthorizationProviderID>
               </sts:AuthorizationProvider>
               <sts:QRCode>
                  <!-- codigo QR que no se como hacer aun --> NroFactura=SETP990000002 NitFacturador=800197268
                  NitAdquiriente=900108281 FechaFactura=2019-06-20 ValorTotalFactura=14024.07
                  CUFE=941cf36af62dbbc06f105d2a80e9bfe683a90e84960eae4d351cc3afbe8f848c26c39bac4fbc80fa254824c6369ea694
                  URL=https://catalogo-vpfe-hab.dian.gov.co/Document/FindDocument?documentKey=941cf36af62dbbc06f105d2a80e9bfe683a90e84960eae4d351cc3afbe8f848c26c39bac4fbc80fa254824c6369ea694&amp;partitionKey=co|06|94&amp;emissionDate=20190620</sts:QRCode>
            </sts:DianExtensions>
         </ext:ExtensionContent>
      </ext:UBLExtension>
`;
}