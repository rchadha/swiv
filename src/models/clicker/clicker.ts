import { DataSource } from '../data-source/data-source';
import { Filter } from '../filter/filter';
import { SplitCombine } from '../split-combine/split-combine';

export interface Clicker {
  changeDataSource(dataSource: DataSource): void;
  setFilter(filter: Filter): void;
  changeSplits(splits: SplitCombine[]): void;
  addSplit(split: SplitCombine): void;
  removeSplit(split: SplitCombine): void;
}
