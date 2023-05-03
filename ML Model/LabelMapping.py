import pandas as pd

# Define the label map
label_map = {
    'india_gdp': 'gdp',
    'gdp_india': 'gdp',
    'unemployment_rate': 'unemployment',
    'inflation_rate': 'inflation',
    # add more label mappings as needed
}

# Load the CSV datasets into pandas DataFrames and rename columns using the label map
dfs = []
for i in range(1, num_datasets + 1):
    filename = f'dataset{i}.csv'
    df = pd.read_csv(filename)
    df = df.rename(columns=label_map)
    dfs.append(df)

# Concatenate the DataFrames into a single DataFrame
combined_df = pd.concat(dfs, ignore_index=True)

# Access the economic factors by their common label in the combined DataFrame
gdp_data = combined_df[combined_df['label'] == 'gdp']
unemployment_data = combined_df[combined_df['label'] == 'unemployment']
inflation_data = combined_df[combined_df['label'] == 'inflation']
# access other economic factors as needed
