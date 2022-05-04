import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Bánh Mì',
    description: 'Thập cẩm, chả giò,..',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Bún cá',
    description: 'Bún cá bò, thập cẩm,..',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Cơm tấm',
    description: 'sà bì chưởng,..',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'trà sữa',
    description: 'Toco, DingTea,..',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
