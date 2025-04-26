import React, { ChangeEventHandler } from "react"

interface SearchProps {
  placeholder?: string
  classProps?: string
  value?: string
  name?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Search = ({
  placeholder = "Enter text",
  classProps = "",
  value = "",
  name = "",
  onChange,
}: SearchProps) => {
  return (
    <input
      type="text"
      className={`border rounded p-2 w-full border-gray-500 mb-2 ${classProps}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  )
}

export default Search
