export function facturaGenerica(payload:any):string{
    return `
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
   xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
   xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
   xmlns:ds="http://www.w3.org/2000/09/xmldsig#"
   xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"
   xmlns:sts="dian:gov:co:facturaelectronica:Structures-2-1"
   xmlns:xades="http://uri.etsi.org/01903/v1.3.2#"
   xmlns:xades141="http://uri.etsi.org/01903/v1.4.1#"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2 http://docs.oasis-open.org/ubl/os-UBL-2.1/xsd/maindoc/UBL-Invoice-2.1.xsd">
   <ext:UBLExtensions>
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
                     <sts:Prefix>SETP</sts:Prefix>
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

      <ext:UBLExtension>
         <ext:ExtensionContent>
            <!-- minimo se debe usar una extencion de la dian -->
            <ds:Signature Id="xmldsig-d0322c4f-be87-495a-95d5-9244980495f4">
               <ds:SignedInfo>
                  <!-- se debe dejar quieto estos campos a menos que se quiera cambiar el algoritmo
                  de sifrado -->
                  <ds:CanonicalizationMethod
                     Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" />
                  <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256" />
                  <ds:Reference Id="xmldsig-d0322c4f-be87-495a-95d5-9244980495f4-ref0" URI="">
                     <ds:Transforms>
                        <ds:Transform
                           Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
                     </ds:Transforms>
                     <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                     <ds:DigestValue>akcOQ5qEh4dkMwt0d5BoXRR8Bo4vdy9DBZtfF5O0SsA=</ds:DigestValue>
                  </ds:Reference>
                  <ds:Reference URI="#xmldsig-87d128b5-aa31-4f0b-8e45-3d9cfa0eec26-keyinfo">
                     <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                     <ds:DigestValue>troRYR2fcmJLV6gYibVM6XlArbddSCkjYkACZJP47/4=</ds:DigestValue>
                  </ds:Reference>
                  <ds:Reference Type="http://uri.etsi.org/01903#SignedProperties"
                     URI="#xmldsig-d0322c4f-be87-495a-95d5-9244980495f4-signedprops">
                     <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                     <ds:DigestValue>hpIsyD/08hVUc1exnfEyhGyKX5s3pUPbpMKmPhkPPqU=</ds:DigestValue>
                  </ds:Reference>
               </ds:SignedInfo>
               <!-- no se si es un numero de factura que incluye un prefijo + un consecutivo
               autorizado -->
               <ds:SignatureValue Id="xmldsig-d0322c4f-be87-495a-95d5-9244980495f4-sigvalue">
                  q4HWeb47oLdDM4D3YiYDOSXE4YfSHkQKxUfSYiEiPuP2XWvD7ELZTC4ENFv6krgDAXczmi0W7OMi
                  LIVvuFz0ohPUc4KNlUEzqSBHVi6sC34sCqoxuRzOmMEoCB9Tr4VICxU1Ue9XhgP7o6X4f8KFAQWW
                  NaeTtA6WaO/yUtq91MKP59aAnFMfYl8lXpaS0kpUwuui3wdCZsGycsl1prEWiwzpaukEUOXyTo7o
                  RBOuNsDIUhP24Fv1alRFnX6/9zEOpRTs4rEQKN3IQnibF757LE/nnkutElZHTXaSV637gpHjXoUN
                  5JrUwTNOXvmFS98N6DczCQfeNuDIozYwtFVlMw==
               </ds:SignatureValue>
               <ds:KeyInfo Id="xmldsig-87d128b5-aa31-4f0b-8e45-3d9cfa0eec26-keyinfo">
                  <ds:X509Data>
                     <ds:X509Certificate>
                        <!-- certificado que es enviado en el xml -->
                        MIIIODCCBiCgAwIBAgIIbAsHYmJtoOIwDQYJKoZIhvcNAQELBQAwgbQxIzAhBgkqhkiG9w0BCQEW
                        FGluZm9AYW5kZXNzY2QuY29tLmNvMSMwIQYDVQQDExpDQSBBTkRFUyBTQ0QgUy5BLiBDbGFzZSBJ
                        STEwMC4GA1UECxMnRGl2aXNpb24gZGUgY2VydGlmaWNhY2lvbiBlbnRpZGFkIGZpbmFsMRMwEQYD
                        VQQKEwpBbmRlcyBTQ0QuMRQwEgYDVQQHEwtCb2dvdGEgRC5DLjELMAkGA1UEBhMCQ08wHhcNMTcw
                        OTE2MTM0ODE5WhcNMjAwOTE1MTM0ODE5WjCCARQxHTAbBgNVBAkTFENhbGxlIEZhbHNhIE5vIDEy
                        IDM0MTgwNgYJKoZIhvcNAQkBFilwZXJzb25hX2p1cmlkaWNhX3BydWViYXMxQGFuZGVzc2NkLmNv
                        bS5jbzEsMCoGA1UEAxMjVXN1YXJpbyBkZSBQcnVlYmFzIFBlcnNvbmEgSnVyaWRpY2ExETAPBgNV
                        BAUTCDExMTExMTExMRkwFwYDVQQMExBQZXJzb25hIEp1cmlkaWNhMSgwJgYDVQQLEx9DZXJ0aWZp
                        Y2FkbyBkZSBQZXJzb25hIEp1cmlkaWNhMQ8wDQYDVQQHEwZCb2dvdGExFTATBgNVBAgTDEN1bmRp
                        bmFtYXJjYTELMAkGA1UEBhMCQ08wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC0Dn8t
                        oZ2CXun+63zwYecJ7vNmEmS+YouH985xDek7ImeE9lMBHXE1M5KDo7iT/tUrcFwKj717PeVL52Nt
                        B6WU4+KBt+nrK+R+OSTpTno5EvpzfIoS9pLI74hHc017rY0wqjl0lw+8m7fyLfi/JO7AtX/dthS+
                        MKHIcZ1STPlkcHqmbQO6nhhr/CGl+tKkCMrgfEFIm1kv3bdWqk3qHrnFJ6s2GoVNZVCTZW/mOzPC
                        NnnUW12LDd/Kd+MjN6aWbP0D/IJbB42Npqv8+/oIwgCrbt0sS1bysUgdT4im9bBhb00MWVmNRBBe
                        3pH5knzkBid0T7TZsPCyiMBstiLT3yfpAgMBAAGjggLpMIIC5TAMBgNVHRMBAf8EAjAAMB8GA1Ud
                        IwQYMBaAFKhLtPQLp7Zb1KAohRCdBBMzxKf3MDcGCCsGAQUFBwEBBCswKTAnBggrBgEFBQcwAYYb
                        aHR0cDovL29jc3AuYW5kZXNzY2QuY29tLmNvMIIB4wYDVR0gBIIB2jCCAdYwggHSBg0rBgEEAYH0
                        SAECCQIFMIIBvzBBBggrBgEFBQcCARY1aHR0cDovL3d3dy5hbmRlc3NjZC5jb20uY28vZG9jcy9E
                        UENfQW5kZXNTQ0RfVjIuNS5wZGYwggF4BggrBgEFBQcCAjCCAWoeggFmAEwAYQAgAHUAdABpAGwA
                        aQB6AGEAYwBpAPMAbgAgAGQAZQAgAGUAcwB0AGUAIABjAGUAcgB0AGkAZgBpAGMAYQBkAG8AIABl
                        AHMAdADhACAAcwB1AGoAZQB0AGEAIABhACAAbABhAHMAIABQAG8AbADtAHQAaQBjAGEAcwAgAGQA
                        ZQAgAEMAZQByAHQAaQBmAGkAYwBhAGQAbwAgAGQAZQAgAFAAZQByAHMAbwBuAGEAIABKAHUAcgDt
                        AGQAaQBjAGEAIAAoAFAAQwApACAAeQAgAEQAZQBjAGwAYQByAGEAYwBpAPMAbgAgAGQAZQAgAFAA
                        cgDhAGMAdABpAGMAYQBzACAAZABlACAAQwBlAHIAdABpAGYAaQBjAGEAYwBpAPMAbgAgACgARABQ
                        AEMAKQAgAGUAcwB0AGEAYgBsAGUAYwBpAGQAYQBzACAAcABvAHIAIABBAG4AZABlAHMAIABTAEMA
                        RDAdBgNVHSUEFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwRgYDVR0fBD8wPTA7oDmgN4Y1aHR0cDov
                        L3d3dy5hbmRlc3NjZC5jb20uY28vaW5jbHVkZXMvZ2V0Q2VydC5waHA/Y3JsPTEwHQYDVR0OBBYE
                        FL9BXJHmFVE5c5Ai8B1bVBWqXsj7MA4GA1UdDwEB/wQEAwIE8DANBgkqhkiG9w0BAQsFAAOCAgEA
                        b/pa7yerHOu1futRt8QTUVcxCAtK9Q00u7p4a5hp2fVzVrhVQIT7Ey0kcpMbZVPgU9X2mTHGfPdb
                        R0hYJGEKAxiRKsmAwmtSQgWh5smEwFxG0TD1chmeq6y0GcY0lkNA1DpHRhSK368vZlO1p2a6S13Y
                        1j3tLFLqf5TLHzRgl15cfauVinEHGKU/cMkjLwxNyG1KG/FhCeCCmawATXWLgQn4PGgvKcNrz+y0
                        cwldDXLGKqriw9dce2Zerc7OCG4/XGjJ2PyZOJK9j1VYIG4pnmoirVmZbKwWaP4/TzLs6LKaJ4b6
                        6xLxH3hUtoXCzYQ5ehYyrLVwCwTmKcm4alrEht3FVWiWXA/2tj4HZiFoG+I1OHKmgkNv7SwHS7z9
                        tFEFRaD3W3aD7vwHEVsq2jTeYInE0+7r2/xYFZ9biLBrryl+q22zM5W/EJq6EJPQ6SM/eLqkpzqM
                        EF5OdcJ5kIOxLbrIdOh0+grU2IrmHXr7cWNP6MScSL7KSxhjPJ20F6eqkO1Z/LAxqNslBIKkYS24
                        VxPbXu0pBXQvu+zAwD4SvQntIG45y/67h884I/tzYOEJi7f6/NFAEuV+lokw/1MoVsEgFESASI9s
                        N0DfUniabyrZ3nX+LG3UFL1VDtDPWrLTNKtb4wkKwGVwqtAdGFcE+/r/1WG0eQ64xCq0NLutCxg= </ds:X509Certificate>
                  </ds:X509Data>
               </ds:KeyInfo>
               <ds:Object>
                  <xades:QualifyingProperties Target="#xmldsig-d0322c4f-be87-495a-95d5-9244980495f4">
                     <xades:SignedProperties
                        Id="xmldsig-d0322c4f-be87-495a-95d5-9244980495f4-signedprops">
                        <xades:SignedSignatureProperties>
                           <xades:SigningTime>2019-06-21T19:09:35.993-05:00</xades:SigningTime>
                           <xades:SigningCertificate>
                              <xades:Cert>
                                 <xades:CertDigest>
                                    <ds:DigestMethod
                                       Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                                    <ds:DigestValue>nem6KXhqlV0A0FK5o+MwJZ3Y1aHgmL1hDs/RMJu7HYw=</ds:DigestValue>
                                 </xades:CertDigest>
                                 <xades:IssuerSerial>
                                    <ds:X509IssuerName>
                                       C=CO,L=Bogota D.C.,O=Andes SCD.,OU=Division
                                       de certificacion entidad final,CN=CA ANDES SCD S.A. Clase
                                       II,1.2.840.113549.1.9.1=#1614696e666f40616e6465737363642e636f6d2e636f
                                    </ds:X509IssuerName>
                                    <ds:X509SerialNumber>7785324499979575522</ds:X509SerialNumber>
                                 </xades:IssuerSerial>
                              </xades:Cert>
                              <xades:Cert>
                                 <xades:CertDigest>
                                    <ds:DigestMethod
                                       Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                                    <ds:DigestValue>oEsyOEeUGTXr45Jr0jHJx3l/9CxcsxPMOTarEiXOclY=</ds:DigestValue>
                                 </xades:CertDigest>
                                 <xades:IssuerSerial>
                                    <ds:X509IssuerName>
                                       C=CO,L=Bogota D.C.,O=Andes SCD,OU=Division de
                                       certificacion,CN=ROOT CA ANDES SCD
                                       S.A.,1.2.840.113549.1.9.1=#1614696e666f40616e6465737363642e636f6d2e636f</ds:X509IssuerName>
                                    <ds:X509SerialNumber>8136867327090815624</ds:X509SerialNumber>
                                 </xades:IssuerSerial>
                              </xades:Cert>
                              <xades:Cert>
                                 <xades:CertDigest>
                                    <ds:DigestMethod
                                       Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                                    <ds:DigestValue>Cs7emRwtXWVYHJrqS9eXEXfUcFyJJBqFhDFOetHu8ts=</ds:DigestValue>
                                 </xades:CertDigest>
                                 <xades:IssuerSerial>
                                    <ds:X509IssuerName>
                                       C=CO,L=Bogota D.C.,O=Andes SCD,OU=Division de
                                       certificacion,CN=ROOT CA ANDES SCD
                                       S.A.,1.2.840.113549.1.9.1=#1614696e666f40616e6465737363642e636f6d2e636f</ds:X509IssuerName>
                                    <ds:X509SerialNumber>3184328748892787122</ds:X509SerialNumber>
                                 </xades:IssuerSerial>
                              </xades:Cert>
                           </xades:SigningCertificate>
                           <xades:SignaturePolicyIdentifier>
                              <xades:SignaturePolicyId>
                                 <xades:SigPolicyId>
                                    <xades:Identifier>
                                       https://facturaelectronica.dian.gov.co/politicadefirma/v1/politicadefirmav2.pdf</xades:Identifier>
                                 </xades:SigPolicyId>
                                 <xades:SigPolicyHash>
                                    <ds:DigestMethod
                                       Algorithm="http://www.w3.org/2001/04/xmlenc#sha256" />
                                    <ds:DigestValue>dMoMvtcG5aIzgYo0tIsSQeVJBDnUnfSOfBpxXrmor0Y=</ds:DigestValue>
                                 </xades:SigPolicyHash>
                              </xades:SignaturePolicyId>
                           </xades:SignaturePolicyIdentifier>
                           <xades:SignerRole>
                              <xades:ClaimedRoles>
                                 <xades:ClaimedRole>supplier</xades:ClaimedRole>
                              </xades:ClaimedRoles>
                           </xades:SignerRole>
                        </xades:SignedSignatureProperties>
                     </xades:SignedProperties>
                  </xades:QualifyingProperties>
               </ds:Object>
            </ds:Signature>
         </ext:ExtensionContent>
      </ext:UBLExtension>
   </ext:UBLExtensions>
   <!-- no se puede mover -->
   <cbc:UBLVersionID>UBL 2.1</cbc:UBLVersionID>
   <!-- no se puede mover -->
   <cbc:CustomizationID>05</cbc:CustomizationID>
   <!-- version del formato de la dian -->
   <cbc:ProfileID>DIAN 2.1</cbc:ProfileID>
   <!-- este codigo es el testigo con el valor del registro de cbc:UUID.@schemeID si son iguales
   confirma y si son desiguales rechaza -->
   <cbc:ProfileExecutionID>2</cbc:ProfileExecutionID>
   <!-- este es el numero de la factura incluye un prefijo + un consecutivo -->
   <cbc:ID>SETP990000002</cbc:ID>
   <cbc:UUID schemeID="2" schemeName="CUFE-SHA384">
      941cf36af62dbbc06f105d2a80e9bfe683a90e84960eae4d351cc3afbe8f848c26c39bac4fbc80fa254824c6369ea694</cbc:UUID>
   <!-- fecha de edicion de la factura -->
   <cbc:IssueDate>2019-06-20</cbc:IssueDate>
   <!-- hora de la edicion -->
   <cbc:IssueTime>09:15:23-05:00</cbc:IssueTime>
   <!-- tipo de factura tocara ver en el excel por si se quiere cambiar de tipo de factura -->
   <cbc:InvoiceTypeCode>01</cbc:InvoiceTypeCode>
   <!-- comentario libre en el espacio de facturacion -->
   <cbc:Note>
      SETP9900000022019-06-2009:15:23-05:0012600.06012424.01040.00030.0014024.07900508908900108281fc8eac422eba16e22ffd8c6f94b3f40a6e38162c2</cbc:Note>
   <!-- esta es la divisa de la factura aqui se debera ver el excel para cuadrar codigos o colocarla
   por defecto -->
   <cbc:DocumentCurrencyCode listAgencyID="6"
      listAgencyName="United Nations Economic Commission for Europe" listID="ISO 4217 Alpha">COP</cbc:DocumentCurrencyCode>
   <cbc:LineCountNumeric>2</cbc:LineCountNumeric>
   <!-- estos campos de abajo son por ejemplo el tipo de facturacion de servicios publicos de una
   fecha a otra -->
   <cac:InvoicePeriod>
      <cbc:StartDate>2019-05-01</cbc:StartDate>
      <cbc:EndDate>2019-05-30</cbc:EndDate>
   </cac:InvoicePeriod>
   <!-- esto hace referencia a la nota de credito que dio origen a la factura de credito
   se coloca que si es prepago o postpago etc -->
   <cac:BillingReference>
      <cac:InvoiceDocumentReference>
         <cbc:ID>SFR3123856</cbc:ID>
         <cbc:UUID schemeName="CUFE-SHA1">a675432fecc1d537361dcdbdfbd08d6e5283f2bc</cbc:UUID>
         <cbc:IssueDate>2018-09-29</cbc:IssueDate>
         <cbc:DocumentDescription>Prepago recibido</cbc:DocumentDescription>
      </cac:InvoiceDocumentReference>
   </cac:BillingReference>
   <cac:BillingReference>
      <cac:InvoiceDocumentReference>
         <cbc:ID>SETP990000101</cbc:ID>
         <cbc:UUID schemeName="CUFE-SHA384">
            1dc661228f152332d876e1f1cd2042ecdea1804ed0da78f84dc9ee0938d69f17037dc53f97778ed2721d65c1fc3c73ac</cbc:UUID>
         <cbc:IssueDate>2018-09-29</cbc:IssueDate>
         <cbc:DocumentDescription>Factura anterior</cbc:DocumentDescription>
      </cac:InvoiceDocumentReference>
   </cac:BillingReference>
   <cac:AccountingSupplierParty>
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
               <!-- nit del emisor --> 800197268</cbc:CompanyID>
            <cbc:TaxLevelCode listName="05">
               <!-- Obligaciones o responsabilidades del
            contribuyente; incluye el régimen al que
            pertenece el emisor --> O-99 </cbc:TaxLevelCode>
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
               <!-- nit emisor --> 800197268</cbc:CompanyID>
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
   <cac:AccountingCustomerParty>
      <!-- Identificador de tipo de persona  lo mismo que deceval aunque mirar documentacion por si
      cambian los campos parametricos-->
      <cbc:AdditionalAccountID>1</cbc:AdditionalAccountID>
      <cac:Party>
         <!-- Grupo con información generales sobre el adquiriente o del que recibe la factura -->
         <!-- hay un campo de id que no aparece aqui pero es referente al documento por ejemplo si
         es uno tipo C.C seria 1088261233 -->
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
   <cac:TaxRepresentativeParty>
      <cac:PartyIdentification>
         <cbc:ID schemeAgencyID="195"
            schemeAgencyName="CO, DIAN (Dirección de Impuestos y Aduanas Nacionales)" schemeID="4"
            schemeName="31">989123123</cbc:ID>
      </cac:PartyIdentification>
   </cac:TaxRepresentativeParty>
   <cac:Delivery>
      <!-- referente a la entrega de vienes mercancia y esas cosas se coloco el nombre de la empresa
      que entrega -->
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
      <!-- no usado por la DIAN se puede omitir o colocar algo referente a la factura pero sobre el
      transporte -->
      <cbc:LossRisk>Costo y Flete</cbc:LossRisk>
   </cac:DeliveryTerms>
   <cac:PaymentMeans>
      <!-- Grupo de campos para información relacionadas con el pago de la factura -->
      <!-- Formas de pago demas que se debera hacer alguna conversion de campos parametricos -->
      <cbc:ID>2</cbc:ID>
      <!-- Código correspondiente al medio de pago -->
      <cbc:PaymentMeansCode>41</cbc:PaymentMeansCode>
      <cbc:PaymentDueDate>2019-06-30</cbc:PaymentDueDate>
      <!-- Identificador del pago -->
      <cbc:PaymentID>1234</cbc:PaymentID>
   </cac:PaymentMeans>
   <cac:PrepaidPayment>
      <!-- esto es en referente a un anticipo  -->
      <cbc:ID>SFR3123856</cbc:ID>
      <cbc:PaidAmount currencyID="COP">1000.00</cbc:PaidAmount>
      <cbc:ReceivedDate>2018-09-29</cbc:ReceivedDate>
      <cbc:PaidDate>2018-09-29</cbc:PaidDate>
      <cbc:InstructionID>Prepago recibido</cbc:InstructionID>
   </cac:PrepaidPayment>
   <cac:TaxTotal>
      <!-- Grupo de campos para información totales relacionadas con un tributo -->
      <!-- valor del trubuto : IVA -->
      <cbc:TaxAmount currencyID="COP">2424.01</cbc:TaxAmount>
      <cac:TaxSubtotal>
         <!-- Grupo de información que definen los
       valores del tributo -->
         <!-- Base Imponible sobre la que se calcula el
        valor del tributo 
        En el caso de que el tributo sea una porcentaje del valor
        tributable: informar la base imponible en valor monetario.
        En el caso de que el tributo es un valor fijo por unidad
        tributada: informar el número de unidades tributadas -->
         <cbc:TaxableAmount currencyID="COP">12600.06</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="COP">2394.01</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:Percent>19.00</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID>01</cbc:ID>
               <cbc:Name>IVA</cbc:Name>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
      <cac:TaxSubtotal>
         <cbc:TaxableAmount currencyID="COP">187.50</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="COP">30.00</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:Percent>16.00</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID>01</cbc:ID>
               <cbc:Name>IVA</cbc:Name>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
   </cac:TaxTotal>
   <cac:TaxTotal>
      <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
      <cac:TaxSubtotal>
         <cbc:TaxableAmount currencyID="COP">0.00</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:Percent>0.000</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID>03</cbc:ID>
               <cbc:Name>ICA</cbc:Name>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
   </cac:TaxTotal>
   <cac:TaxTotal>
      <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
      <cac:TaxSubtotal>
         <cbc:TaxableAmount currencyID="COP">0.00</cbc:TaxableAmount>
         <cbc:TaxAmount currencyID="COP">0.00</cbc:TaxAmount>
         <cac:TaxCategory>
            <cbc:Percent>0.00</cbc:Percent>
            <cac:TaxScheme>
               <cbc:ID>04</cbc:ID>
               <cbc:Name>INC</cbc:Name>
            </cac:TaxScheme>
         </cac:TaxCategory>
      </cac:TaxSubtotal>
   </cac:TaxTotal>
   <cac:LegalMonetaryTotal>
      <!-- Total valor bruto, suma de los valores
     brutos de las líneas de la factura.
     sin calcular los impuestos aun -->
      <cbc:LineExtensionAmount currencyID="COP">12600.06</cbc:LineExtensionAmount>
      <!-- Total Valor Base Imponible : Base
      imponible para el cálculo de los tributos antes de los impuestos -->
      <cbc:TaxExclusiveAmount currencyID="COP">12787.56</cbc:TaxExclusiveAmount>
      <!-- Total Valor Base Imponible : Base
      imponible para el cálculo de los tributos despues de los impuestos -->
      <!-- tambien hay un campo de descuentos pero no esta aplicado AllowanceTotal -->
      <cbc:TaxInclusiveAmount currencyID="COP">15024.07</cbc:TaxInclusiveAmount>
      <cbc:PrepaidAmount currencyID="COP">1000.00</cbc:PrepaidAmount>
      <cbc:PayableAmount currencyID="COP">14024.07</cbc:PayableAmount>
   </cac:LegalMonetaryTotal>
   <cac:InvoiceLine>
      <cbc:ID>1</cbc:ID>
      <!-- Cantidad del producto o servicio -->
      <cbc:InvoicedQuantity unitCode="EA">1.000000</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">12600.06</cbc:LineExtensionAmount>
      <!-- indicador si es gratis o no -->
      <cbc:FreeOfChargeIndicator>false</cbc:FreeOfChargeIndicator>
      <cac:Delivery>
         <cac:DeliveryLocation>
            <cbc:ID schemeID="999" schemeName="EAN">613124312412</cbc:ID>
         </cac:DeliveryLocation>
      </cac:Delivery>
      <cac:AllowanceCharge>
         <!-- Indica que el elemento es un Cargo y no un descuento mejor dicho si tiene costos extra
         por x razon -->
         <cbc:ID>1</cbc:ID>
         <cbc:ChargeIndicator>false</cbc:ChargeIndicator>
         <!-- texto libre para informar por que es un descuento no un cargo extra -->
         <cbc:AllowanceChargeReason>Descuento por cliente frecuente</cbc:AllowanceChargeReason>
         <cbc:MultiplierFactorNumeric>33.33</cbc:MultiplierFactorNumeric>
         <cbc:Amount currencyID="COP">6299.94</cbc:Amount>
         <cbc:BaseAmount currencyID="COP">18900.00</cbc:BaseAmount>
      </cac:AllowanceCharge>
      <cac:TaxTotal>
         <!-- Grupo de campos para información
       relacionadas con un tributo aplicable a esta 
       línea de la factura -->
         <cbc:TaxAmount currencyID="COP">2394.01</cbc:TaxAmount>
         <cac:TaxSubtotal>
            <cbc:TaxableAmount currencyID="COP">12600.06</cbc:TaxableAmount>
            <cbc:TaxAmount currencyID="COP">2394.01</cbc:TaxAmount>
            <cac:TaxCategory>
               <!-- porcentaje del iva o del impuesto -->
               <cbc:Percent>19.00</cbc:Percent>
               <cac:TaxScheme>
                  <cbc:ID>01</cbc:ID>
                  <cbc:Name>IVA</cbc:Name>
               </cac:TaxScheme>
            </cac:TaxCategory>
         </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
         <!-- Grupo de información que describen las características del artículo o servicio -->
         <!-- descripcion del objeto o servicio -->
         <cbc:Description>AV OASYS -2.25 (8.4) LENTE DE CONTATO</cbc:Description>
         <cac:SellersItemIdentification>
            <!-- Código del vendedor correspondiente al artículo -->
            <cbc:ID>AOHV84-225</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:AdditionalItemIdentification>
            <!-- Código de acuerdo con el estándar descrito en el atributo ID/@schemeAgencyID -->
            <cbc:ID schemeID="999" schemeName="EAN13">6543542313534</cbc:ID>
         </cac:AdditionalItemIdentification>
      </cac:Item>
      <cac:Price>
         <!-- referente al precio y la cantidad -->
         <cbc:PriceAmount currencyID="COP">18900.00</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="EA">1.000000</cbc:BaseQuantity>
      </cac:Price>
   </cac:InvoiceLine>
   <cac:InvoiceLine>
      <cbc:ID>2</cbc:ID>
      <cbc:InvoicedQuantity unitCode="NIU">1.000000</cbc:InvoicedQuantity>
      <cbc:LineExtensionAmount currencyID="COP">0.00</cbc:LineExtensionAmount>
      <cbc:FreeOfChargeIndicator>true</cbc:FreeOfChargeIndicator>
      <cac:DocumentReference>
         <cbc:ID>TST1543623</cbc:ID>
         <cbc:IssueDate>2019-03-02</cbc:IssueDate>
         <cbc:DocumentTypeCode>1001-A</cbc:DocumentTypeCode>
         <cbc:DocumentType>Bienes Propios</cbc:DocumentType>
      </cac:DocumentReference>
      <cac:DocumentReference>
         <cbc:ID>GR8713461</cbc:ID>
         <cbc:IssueDate>2019-03-02</cbc:IssueDate>
         <cbc:DocumentTypeCode>AR</cbc:DocumentTypeCode>
      </cac:DocumentReference>
      <cac:PricingReference>
         <cac:AlternativeConditionPrice>
            <cbc:PriceAmount currencyID="COP">100.00</cbc:PriceAmount>
            <cbc:PriceTypeCode>03</cbc:PriceTypeCode>
            <cbc:PriceType>Otro valor</cbc:PriceType>
         </cac:AlternativeConditionPrice>
      </cac:PricingReference>
      <cac:Delivery>
         <cac:DeliveryLocation>
            <cbc:ID schemeID="999" schemeName="EAN">613124312412</cbc:ID>
         </cac:DeliveryLocation>
      </cac:Delivery>
      <cac:TaxTotal>
         <cbc:TaxAmount currencyID="COP">30.00</cbc:TaxAmount>
         <cac:TaxSubtotal>
            <cbc:TaxableAmount currencyID="COP">187.50</cbc:TaxableAmount>
            <cbc:TaxAmount currencyID="COP">30.00</cbc:TaxAmount>
            <cac:TaxCategory>
               <cbc:Percent>16.00</cbc:Percent>
               <cac:TaxScheme>
                  <cbc:ID>01</cbc:ID>
                  <cbc:Name>IVA</cbc:Name>
               </cac:TaxScheme>
            </cac:TaxCategory>
         </cac:TaxSubtotal>
      </cac:TaxTotal>
      <cac:Item>
         <cbc:Description>Bolsa</cbc:Description>
         <cac:SellersItemIdentification>
            <cbc:ID>91412012412</cbc:ID>
         </cac:SellersItemIdentification>
         <cac:StandardItemIdentification>
            <cbc:ID schemeAgencyID="10" schemeID="001" schemeName="UNSPSC">18937100-7</cbc:ID>
         </cac:StandardItemIdentification>
      </cac:Item>
      <cac:Price>
         <cbc:PriceAmount currencyID="COP">0.00</cbc:PriceAmount>
         <cbc:BaseQuantity unitCode="NIU">1.000000</cbc:BaseQuantity>
      </cac:Price>
   </cac:InvoiceLine>
</Invoice>
    `
}