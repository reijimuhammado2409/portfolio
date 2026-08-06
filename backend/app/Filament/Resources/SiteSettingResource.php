<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SiteSettingResource\Pages;
use App\Models\SiteSetting;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SiteSettingResource extends Resource
{
    protected static ?string $model = SiteSetting::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static \UnitEnum|string|null $navigationGroup = 'Configuration';

    public static function canCreate(): bool
    {
        return SiteSetting::count() < 1;
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('General Information')
                    ->schema([
                        TextInput::make('site_name')
                            ->required()
                            ->maxLength(255),
                        Textarea::make('site_description')
                            ->rows(3),
                    ]),
                Section::make('Branding & Files')
                    ->schema([
                        FileUpload::make('logo')
                            ->disk('public')
                            ->directory('settings'),
                        FileUpload::make('favicon')
                            ->disk('public')
                            ->directory('settings'),
                        FileUpload::make('cv_file')
                            ->disk('public')
                            ->directory('cv'),
                    ])->columns(3),
                Section::make('Contact Details')
                    ->schema([
                        TextInput::make('email')
                            ->email(),
                        TextInput::make('phone'),
                        Textarea::make('address')
                            ->rows(2),
                    ])->columns(2),
                Section::make('Social Links (Fallback)')
                    ->schema([
                        TextInput::make('github_url')->url(),
                        TextInput::make('linkedin_url')->url(),
                        TextInput::make('instagram_url')->url(),
                        TextInput::make('whatsapp_url')->url(),
                    ])->columns(2),
                Section::make('SEO Configuration')
                    ->schema([
                        TextInput::make('seo_title'),
                        Textarea::make('seo_description')->rows(2),
                        Textarea::make('seo_keywords')->rows(2),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('site_name')->searchable(),
                TextColumn::make('email')->searchable(),
                TextColumn::make('phone'),
                TextColumn::make('updated_at')->dateTime()->sortable(),
            ])
            ->actions([
                EditAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSiteSettings::route('/'),
            'create' => Pages\CreateSiteSetting::route('/create'),
            'edit' => Pages\EditSiteSetting::route('/{record}/edit'),
        ];
    }
}
