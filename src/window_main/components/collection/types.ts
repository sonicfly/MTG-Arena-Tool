import { CellProps, Row, TableState } from "react-table";
import { DbCardData } from "../../../shared/types/Metadata";
import { TableControlsProps, TableViewRowProps } from "../tables/types";

export interface CardsData extends DbCardData {
  colors: number[];
  colorSortVal: string;
  rankSortVal: string;
  owned: number;
  acquired: number;
  wanted: number;
}

export interface CollectionTableProps {
  cachedState: TableState<CardsData>;
  cachedTableMode: string;
  cardHoverCallback: (cardDiv: HTMLElement, card: DbCardData) => void;
  contextMenuCallback: (cardDiv: HTMLElement, card: DbCardData) => void;
  data: CardsData[];
  exportCallback: (cardIds: string[]) => void;
  filterDataCallback: (data: CardsData[]) => void;
  openCardCallback: (cardObj: DbCardData) => void;
  tableModeCallback: (tableMode: string) => void;
  tableStateCallback: (state: TableState<CardsData>) => void;
}

export interface CollectionTableControlsProps
  extends TableControlsProps<CardsData> {
  exportCallback: (cardIds: string[]) => void;
  rows: Row<CardsData>[];
}

export interface CollectionTableRowProps extends TableViewRowProps<CardsData> {
  cardHoverCallback: (cardDiv: HTMLElement, card: DbCardData) => void;
  contextMenuCallback: (cardDiv: HTMLElement, card: DbCardData) => void;
  openCardCallback: (cardObj: DbCardData) => void;
}

export type CollectionTableCellProps = CellProps<CardsData>;
