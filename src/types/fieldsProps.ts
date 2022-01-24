import { FieldConfig, GenericFieldHTMLAttributes } from 'formik';
import { SelectOptions } from 'types';
import { BorderProps } from './borderProps';

export type FieldsProps<T> = {
  options?: SelectOptions[];
} & BorderProps &
  FieldConfig<T> &
  GenericFieldHTMLAttributes;
