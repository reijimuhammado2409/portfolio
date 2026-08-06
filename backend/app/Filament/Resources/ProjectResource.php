<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-folder';

    protected static \UnitEnum|string|null $navigationGroup = 'Projects Management';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('General Project Information')
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn ($set, $state) => $set('slug', Str::slug($state))),
                        TextInput::make('slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),
                        Select::make('category_id')
                            ->relationship('category', 'name')
                            ->searchable()
                            ->preload(),
                        Select::make('techStacks')
                            ->multiple()
                            ->relationship('techStacks', 'name')
                            ->preload(),
                        Textarea::make('short_description')
                            ->rows(2),
                        RichEditor::make('description')
                            ->columnSpanFull(),
                        FileUpload::make('thumbnail')
                            ->disk('public')
                            ->directory('projects')
                            ->image(),
                        TextInput::make('sort_order')
                            ->numeric()
                            ->default(0),
                        Toggle::make('is_featured')
                            ->default(false),
                        Toggle::make('is_active')
                            ->default(true),
                    ])->columns(2),

                Section::make('Project Gallery Images')
                    ->schema([
                        Repeater::make('images')
                            ->relationship('images')
                            ->schema([
                                FileUpload::make('image')
                                    ->disk('public')
                                    ->directory('projects/gallery')
                                    ->image()
                                    ->required(),
                                TextInput::make('sort_order')
                                    ->numeric()
                                    ->default(0),
                            ])
                            ->columns(2)
                            ->defaultItems(0)
                            ->reorderable('sort_order'),
                    ]),

                Section::make('Project External Links')
                    ->schema([
                        Repeater::make('links')
                            ->relationship('links')
                            ->schema([
                                TextInput::make('type')
                                    ->placeholder('github, demo, docs')
                                    ->required(),
                                TextInput::make('label')
                                    ->placeholder('Source Code, Live Demo')
                                    ->required(),
                                TextInput::make('url')
                                    ->url()
                                    ->required(),
                                TextInput::make('sort_order')
                                    ->numeric()
                                    ->default(0),
                            ])
                            ->columns(2)
                            ->defaultItems(0)
                            ->reorderable('sort_order'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('thumbnail')->disk('public'),
                TextColumn::make('title')->searchable(),
                TextColumn::make('category.name')->searchable(),
                IconColumn::make('is_featured')->boolean(),
                TextColumn::make('sort_order')->sortable(),
                IconColumn::make('is_active')->boolean(),
                TextColumn::make('created_at')->dateTime()->sortable(),
            ])
            ->defaultSort('sort_order', 'asc')
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
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
