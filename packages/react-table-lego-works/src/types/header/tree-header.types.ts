import { ColProps } from 'react-table-lego-brick';
import { LayoutChangeCallback } from './commons.types';
import HeaderTree from '../../header/data/header-tree';

export interface TreeHeaderProps {
  headerTree: HeaderTree;
  columns: Array<ColProps | undefined | null>;
  onLayoutChange?: LayoutChangeCallback;
}
