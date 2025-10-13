// --- CONFIGURACIÓN DE CLAVES ---
// Para desarrollo local, reemplaza los siguientes valores con tus propias claves.
// Para producción (Vercel), la aplicación usará automáticamente las variables de entorno.
export const API_KEY = process.env.API_KEY || 'AIzaSyBbVozJ3ADuP34BmiBXCMSITYfNdpDd4EA';
export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '9fedd4ba7fbb438ba6a8b7b8a955c045';


// --- (Opcional) Configuración de Webhook de Discord ---
// ADVERTENCIA: Exponer una URL de webhook en una aplicación de cliente (frontend)
// es un RIESGO DE SEGURIDAD. Cualquiera puede encontrar la URL en el código
// fuente de tu web y enviarle peticiones no deseadas (spam).
// Para producción, se recomienda encarecidamente usar una función de servidor
// (serverless function) como intermediario.
// Si entiendes el riesgo, pega tu URL aquí. Si se deja en blanco, esta función se desactivará.
export const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/1425564352995397825/AuY7UXM_JPePXJCC8Fwukjw5JSBEwYijNX_QcGo4XUJn2LtpgVJoseUjKj_RYMyjN8nL';


// --- MODO DE PRUEBAS / DESARROLLO ---
// ¡¡¡ADVERTENCIA: NO USAR EN PRODUCCIÓN!!!
// Poner a `true` para saltar la autenticación de Spotify. Esto permite probar
// la generación de playlists sin necesidad de conectar una cuenta de Spotify.
// Las funciones como crear playlist en Spotify o buscar artistas serán simuladas.
export const SKIP_SPOTIFY_AUTH = false;


// =================================================================================
// NO NECESITAS EDITAR NADA DEBAJO DE ESTA LÍNEA
// =================================================================================

/**
 * La URI de redirección para la autenticación de Spotify.
 * IMPORTANTE: Esta URL DEBE estar en la lista blanca de "Redirect URIs"
 * en la configuración de tu aplicación en el panel de desarrollador de Spotify.
 * Para esta aplicación, debe ser: https://nexis-playlists.vercel.app/
 */
export const REDIRECT_URI = 'https://nexis-playlists.vercel.app/';
export const SPOTIFY_SCOPES = "playlist-modify-public playlist-modify-private";
