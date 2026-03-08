// Creación del archivo src/utils/storage.ts

// Usamos una constante para la llave del localStorage para evitar errores de tipeo.
const FAVORITES_KEY = 'country_explorer_favorites';

/**
 * Obtiene la lista de códigos de países favoritos del localStorage.
 */
export function getFavorites(): string[] {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    // Si hay datos, los convertimos de string a arreglo. Si no, devolvemos un arreglo vacío.
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error al leer favoritos:', error);
    return [];
  }
}

/**
 * Guarda la lista de códigos de países favoritos en el localStorage.
 */
export function saveFavorites(favorites: string[]): void {
  try {
    // localStorage solo guarda strings, así que convertimos el arreglo a JSON.
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error al guardar favoritos:', error);
  }
}

/**
 * Añade o elimina un país de la lista de favoritos.
 * @param countryCode El código CCA3 del país (ej. "GTM" para Guatemala)
 * @returns true si se añadió, false si se eliminó
 */
export function toggleFavorite(countryCode: string): boolean {
  const favorites = getFavorites();
  const index = favorites.indexOf(countryCode);
  
  if (index === -1) {
    // No existe en la lista, lo añadimos.
    favorites.push(countryCode);
    saveFavorites(favorites);
    return true;
  } else {
    // Ya existe, lo quitamos.
    favorites.splice(index, 1);
    saveFavorites(favorites);
    return false;
  }
}

/**
 * Verifica si un país es favorito.
 */
export function isFavorite(countryCode: string): boolean {
  return getFavorites().includes(countryCode);
}