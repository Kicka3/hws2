import React from 'react'
import up from '../c9-SuperPagination/up.svg';
import down from '../c9-SuperPagination/down.svg';
import whiteDown from '../c9-SuperPagination/whiteDown.svg';
import whiteUp from '../c9-SuperPagination/whiteUp.svg';

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
        console.log('sort')
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img className={'myIcon'}
                 style={{marginLeft: "4px"}}
                 id={id + '-icon-' + sort}
                 src={icon}
            />
        </span>
    )
}

export default SuperSort
