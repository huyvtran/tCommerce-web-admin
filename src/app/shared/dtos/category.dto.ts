import { MetaTagsDto } from './meta-tags.dto';
import { MediaDto } from './media.dto';
import { EProductsSort } from '../enums/product-sort.enum';

export class AddOrUpdateCategoryDto {
  isEnabled: boolean = true;
  name: string = '';
  canonicalCategoryId: number = null;
  description: string = '';
  slug: string = '';
  createRedirect: boolean = false;
  parentId: number = 0;
  metaTags: MetaTagsDto = new MetaTagsDto();
  medias: MediaDto[] = [];
  defaultItemsSort: EProductsSort = EProductsSort.Popularity;
}

export class CategoryDto extends AddOrUpdateCategoryDto {
  id?: number;
}

export class CategoryTreeItem {
  id: CategoryDto['id'];
  name: CategoryDto['name'];
  slug: CategoryDto['slug'];
  parentId: CategoryDto['parentId'];
  children: CategoryTreeItem[];
  medias: MediaDto[];
}

