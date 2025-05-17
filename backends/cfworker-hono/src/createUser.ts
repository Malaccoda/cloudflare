import type { SexType } from '@faker-js/faker';
import { faker } from '@faker-js/faker';

type SubscriptionTier = 'free' | 'basic' | 'business';

interface User {
    _id: string;
    avatar: string;
    birthday: Date;
    email: string;
    firstName: string;
    lastName: string;
    sex: SexType;
    subscriptionTier: SubscriptionTier;
}


export function createRandomUser(): User {
    const sex = faker.person.sexType();
    const birthday = faker.date.birthdate();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName, provider: 'cryptolypser.shop' });
    return {
        _id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday,
        email,
        firstName,
        lastName,
        sex,
        subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
}