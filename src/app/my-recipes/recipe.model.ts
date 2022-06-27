export class Recipe {
  public name: string;
  public description: string;
  public ingredientsList: string;
  public imagePath: string;

  constructor(
    name: string,
    description: string,
    ingredientsList: string,
    imagePath: string
  ) {
    this.name = name;
    this.description = description;
    this.ingredientsList = ingredientsList;
    this.imagePath = imagePath;
  }
}
