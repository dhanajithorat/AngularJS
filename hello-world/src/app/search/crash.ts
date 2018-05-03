export interface Crash{
    G:General;
    Vs:Vehicle[];
  }

  export interface General{
    DocNum:string;  
    CrashDate:string;
    CaseNum:string;
    Vehicles:number;
    O:Officer;
    L:Location;
  }

  export interface Officer{
      FName:string;
      LName:string;
  }

  export interface Location{
      Lat:number;
      Lng:number;
  }

  export interface Owner{
    FName:string;
    LName:string;
}

export interface Driver{
    FName:string;
    LName:string;
}

export interface Vehicle{
    Make:string;
    Model:string;
    Year:string;
    O:Owner;
    D:Driver;
}