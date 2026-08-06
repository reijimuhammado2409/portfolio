<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TechStackResource\Pages;
use App\Models\TechStack;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class TechStackResource extends Resource
{
    protected static ?string $model = TechStack::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-code-bracket';

    protected static \UnitEnum|string|null $navigationGroup = 'Projects Management';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Tech Stack Details')
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        FileUpload::make('icon')
                            ->disk('public')
                            ->directory('techs'),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('icon')->disk('public'),
                TextColumn::make('name')->searchable(),
                TextColumn::make('created_at')->dateTime()->sortable(),
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTechStacks::route('/'),
            'create' => Pages\CreateTechStack::route('/create'),
            'edit' => Pages\EditTechStack::route('/{record}/edit'),
        ];
    }
}
