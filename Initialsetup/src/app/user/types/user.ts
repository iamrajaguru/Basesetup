export interface ISearchFields {
  userInput: string;
  searchBy: string;
  selectionType: any[];
  itemList: IItems[];
}
// export interface IList {
//   itemList: IItems[];
// }
export interface IItems {
  _id: string;
  itemName: string;
  variety: string;
  category: string;
  ingredients: [];
  procedure: [];
}
