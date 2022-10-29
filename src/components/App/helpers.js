//statistics
import stat from 'data/data.json';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const arrIcon = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

export const statistics = stat.map((i, index) => {
  return { ...i, Icon: arrIcon[index] };
});
