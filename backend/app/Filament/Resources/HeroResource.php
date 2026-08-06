<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HeroResource\Pages;
use App\Models\Hero;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

class HeroResource extends Resource
{
    protected static ?string $model = Hero::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-home';

    protected static \UnitEnum|string|null $navigationGroup = 'Landing Page';

    public static function canCreate(): bool
    {
        return Hero::count() < 1;
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Hero Header')
                    ->schema([
                        Forms\Components\TextInput::make('headline')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('subheadline')
                            ->maxLength(255),
                        Forms\Components\Textarea::make('description')
                            ->rows(3),
                        Forms\Components\FileUpload::make('hero_image')
                            ->disk('public')
                            ->directory('heroes'),
                    ]),
                Section::make('Call To Action Buttons')
                    ->schema([
                        Forms\Components\TextInput::make('primary_button_text'),
                        Forms\Components\TextInput::make('primary_button_url'),
                        Forms\Components\TextInput::make('secondary_button_text'),
                        Forms\Components\TextInput::make('secondary_button_url'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('hero_image')->disk('public'),
                Tables\Columns\TextColumn::make('headline')->searchable(),
                Tables\Columns\TextColumn::make('subheadline')->searchable(),
                Tables\Columns\TextColumn::make('updated_at')->dateTime()->sortable(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHeroes::route('/'),
            'create' => Pages\CreateHero::route('/create'),
            'edit' => Pages\EditHero::route('/{record}/edit'),
        ];
    }
}
