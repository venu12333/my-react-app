#!/usr/bin/env python3

import os

FILE_NAME = "hello"
DEFAULT_CONTENT = "This is a placeholder file created by the system."

def create_hello_file(directory=".", overwrite=True):
    """
    Creates a file named 'hello' in the specified directory.

    Args:
        directory (str): The directory where the file should be created.
                         Defaults to the current directory.
        overwrite (bool): If True, overwrite the file if it already exists.
                          If False, raise an error if the file exists.

    Returns:
        str: A message indicating the success or failure of the operation.
    """
    file_path = os.path.join(directory, FILE_NAME)

    if os.path.exists(file_path) and not overwrite:
        return f"Error: File '{file_path}' already exists and overwrite is set to False."

    try:
        # Ensure the directory exists
        os.makedirs(directory, exist_ok=True)

        with open(file_path, "w") as f:
            f.write(DEFAULT_CONTENT)

        return f"Successfully created file: '{file_path}'"

    except OSError as e:
        return f"Error creating file '{file_path}': {e}"

if __name__ == "__main__":
    # Example usage:
    # Create in the current directory, overwriting if it exists
    result = create_hello_file()
    print(result)

    # Example of creating in a subdirectory and not overwriting
    # result_subdir_no_overwrite = create_hello_file("temp_files", overwrite=False)
    # print(result_subdir_no_overwrite)

    # Example of creating in a subdirectory and overwriting
    # result_subdir_overwrite = create_hello_file("temp_files", overwrite=True)
    # print(result_subdir_overwrite)
