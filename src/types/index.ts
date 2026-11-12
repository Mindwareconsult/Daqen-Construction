export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'foundation' | 'building' | 'structural' | 'completed';
  categoryLabel: string;
  imageSrc: string;
  description: string;
  stage: string;
  location?: string;
  highlight?: string;
}

export interface ServiceArea {
  state: string;
  hub: string;
  description: string;
  tag: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
}
