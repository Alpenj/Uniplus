export interface Project {
    id: string;
    title: string;
    category: 'Residential' | 'Commercial' | 'Public' | 'Landscape';
    location: string;
    imageUrl: string;
    year: string;
}

export const interiorProjects: Project[] = [
    {
        id: 'i1',
        title: 'Azure Penthouse',
        category: 'Residential',
        location: 'Seoul, Gangnam',
        imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
        year: '2025'
    },
    {
        id: 'i2',
        title: 'Minimalist Cafe',
        category: 'Commercial',
        location: 'Busan, Haeundae',
        imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop',
        year: '2024'
    },
    {
        id: 'i3',
        title: 'Urban Loft',
        category: 'Residential',
        location: 'Seongsu-dong',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
        year: '2024'
    },
    {
        id: 'i4',
        title: 'Office Lounge',
        category: 'Commercial',
        location: 'Pangyo',
        imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
        year: '2025'
    },
    {
        id: 'i5',
        title: 'Modern Kitchen',
        category: 'Residential',
        location: 'Hannam-dong',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
        year: '2023'
    },
    {
        id: 'i6',
        title: 'Boutique Hotel',
        category: 'Commercial',
        location: 'Jeju Island',
        imageUrl: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1200&auto=format&fit=crop',
        year: '2024'
    }
];

export const architectureProjects: Project[] = [
    {
        id: 'a1',
        title: 'Glass Tower',
        category: 'Commercial',
        location: 'Yeouido',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
        year: '2025'
    },
    {
        id: 'a2',
        title: 'Forest Museum',
        category: 'Public',
        location: 'Gangwon-do',
        imageUrl: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200&auto=format&fit=crop',
        year: '2024'
    },
    {
        id: 'a3',
        title: 'Concrete Villa',
        category: 'Residential',
        location: 'Pyeongchang',
        imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop',
        year: '2023'
    },
    {
        id: 'a4',
        title: 'City Library',
        category: 'Public',
        location: 'Sejong City',
        imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop',
        year: '2024'
    },
    {
        id: 'a5',
        title: 'Tech Hub',
        category: 'Commercial',
        location: 'Pangyo',
        imageUrl: 'https://images.unsplash.com/photo-1465572089651-8fde36c892dd?q=80&w=1200&auto=format&fit=crop',
        year: '2025'
    },
    {
        id: 'a6',
        title: 'Sky Bridge',
        category: 'Public',
        location: 'Incheon',
        imageUrl: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=1200&auto=format&fit=crop',
        year: '2023'
    }
];
