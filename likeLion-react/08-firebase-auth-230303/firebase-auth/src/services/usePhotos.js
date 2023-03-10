import { useFetch } from '@/hooks';

/**
 * 포토 가져오기 유틸리티 함수
 * @param {{ limit: number; page: number; }} options 페이지, 가져올 갯수
 * @returns {{ isLoading: boolean; error: null | Error; data: null | unknown }}
 */

// 참고: https://exploringjs.com/impatient-js/toc.html

// export function usePhotos(userOptions = {}) {
//   const { page, limit } = { ...usePhotos.defaultOptions, ...userOptions };
//   return useFetch(
//     `${import.meta.env.VITE_PHOTOS_API}?_page=${page}&_limit=${limit}`
//   );
// }

// usePhotos.defaultOptions = {
//   limit: 20,
//   page: 1,
// };

export function usePhotos({ limit = 20, page = 1 } = {}) {
  return useFetch(
    `${import.meta.env.VITE_PHOTOS_API}?_page=${page}&_limit=${limit}`
  );
}
