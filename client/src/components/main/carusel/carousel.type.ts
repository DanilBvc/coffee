export interface carouselType<T> {
  list: T[];
  active: T;
  updateActive: (option: T) => void;
}
