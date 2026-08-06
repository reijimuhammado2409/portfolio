<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HeroResource\Pages;
use App\Models\Hero;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
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
                        TextInput::make('headline')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('subheadline')
                            ->maxLength(255),
                        Textarea::make('description')
                            ->rows(3),
                        FileUpload::make('hero_image')
                            ->disk('public')
                            ->directory('heroes'),
                    ]),
                Section::make('Call To Action Buttons')
                    ->schema([
                        TextInput::make('primary_button_text'),
                        TextInput::make('primary_button_url'),
                        TextInput::make('secondary_button_text'),
                        TextInput::make('secondary_button_url'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('hero_image')->disk('public'),
                TextColumn::make('headline')->searchable(),
                TextColumn::make('subheadline')->searchable(),
                TextColumn::make('updated_at')->dateTime()->sortable(),
            ])
            ->actions([
                EditAction::make(),
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
