export interface Props {
    mod: 'x' | 'y'
}

export  function ThemeToggle({ mod = 'x' }: Props){

    console.log( mod,'1')

    return (
        <button>themeToggle</button>
    )
}