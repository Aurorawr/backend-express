import { WebpayPlus, Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk';

// Configuración por defecto para pruebas (Integración)
const tx = new WebpayPlus.Transaction(
  new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration)
);

export const iniciarPago = async (solicitudPago) => {
  const { ordenDeCompra, idSesion, monto, urlRetorno } = solicitudPago;
  // Creamos el link de pago en webpay
  const respuestaWebpay = await tx.create(ordenDeCompra, idSesion, monto, urlRetorno);
  return respuestaWebpay;
}

export const confirmarPago = async (tokenWebpay) => {
  // Confirmamos el pago en webpay
  const respuestaWebpay = await tx.commit(tokenWebpay);
  return respuestaWebpay;
}
