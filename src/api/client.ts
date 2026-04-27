const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/sandres-cms-api";

export const api = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const config: RequestInit = {
    method: options?.method,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  };
  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Error en la petición. xd");
  }

  return await response.json();
};
