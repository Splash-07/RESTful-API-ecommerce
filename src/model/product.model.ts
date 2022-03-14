import { getModelForClass, modelOptions, prop, Severity } from "@typegoose/typegoose";

class AlternateName {
  @prop()
  locale: string;
  @prop()
  title: string;
}

class LocalizedData {
  @prop()
  locale: string;
  @prop()
  title: string;
  @prop()
  pdpUrl: string;
}

class Media {
  @prop()
  images: {
    url: string;
    type: string;
    colourWayId: number;
    colourCode: string;
    colour: string;
    isPrimary: boolean;
  };
  @prop()
  catwalk: {
    url: string;
    colourWayId: number;
    colourCode: string;
  };
}

class Price {
  @prop({ required: true })
  current!: {
    value: number;
    text: string;
    versionId: string;
    conversionId: string;
  };
  @prop({ required: true })
  currency: string;
  @prop({ default: false })
  isMarkedDown: boolean;
  @prop({ default: false })
  isOutletPrice: boolean;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Product {
  @prop({ required: true })
  id!: number;

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  description!: string;

  @prop({ type: () => AlternateName, _id: false })
  alternateNames?: AlternateName[];

  @prop({ type: () => LocalizedData, _id: false })
  localizedData?: LocalizedData[];

  @prop({ required: true })
  gender!: string;

  @prop({ required: true })
  productCode!: string;

  @prop()
  pdpLayout?: string;

  @prop({ required: true })
  brand!: {
    brandId: string;
    name: string;
    description: string;
  };

  @prop({ required: true, default: false })
  isNoSize!: boolean;

  @prop({ required: true, default: false })
  isOneSize!: boolean;

  @prop({ required: true, default: true })
  isInStock!: boolean;

  @prop({ required: true, type: () => Media, _id: false })
  media!: Media;

  @prop({ required: true })
  info!: {
    aboutMe: string;
    sizeAndFit: string;
    careInfo: string;
  };

  @prop({ required: true, type: () => Price, _id: false })
  price!: Price;

  @prop({ required: true, default: false })
  isDeadProduct!: boolean;

  @prop({ default: null })
  rating?: {
    averageOverallRating: number;
    averageOverallStarRating: number;
    totalReviewCount: number;
  } | null;

  @prop({ required: true })
  productType!: {
    id: number;
    name: string;
  };

  @prop({ required: true })
  variants!: {
    brandSize: string;
    sizeDescription: string;
    displaySizeText: string;
    sku: string;
    isInStock: boolean;
    isAvailable: boolean;
  }[];
}

const ProductModel = getModelForClass(Product);

export default ProductModel;
