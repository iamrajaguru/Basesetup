export interface ISearchFields {
  userInput: string;
  searchBy: string;
  selectionType: any[];
  itemList: IItems[];
  itemrecipe: {
    itemName: string;
    variety: string;
    category: string;
    ingredients: [];
    procedure: [];
    tempIng: string;
    tempSteps: string;
    pics: any | null ;
  };
}

export interface IItems {
  _id: string;
  itemName: string;
  variety: string;
  category: string;
  ingredients: [];
  procedure: [];
}

export interface IRoleRouteProps {
  match: {
    params: {
      id: string | undefined;
    };
  };
}
